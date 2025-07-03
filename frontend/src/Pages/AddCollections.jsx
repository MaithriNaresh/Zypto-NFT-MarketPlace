import axios from "axios";
import { useState } from "react";
import SideComponent from "./Componets/SideComponent";
import HeaderComponet from "./Componets/HeaderComponet";

const AddCollections = () => {
const [collection , setcollection] = useState({
    name:""
});
const [image , setimage] = useState();
const userid = localStorage.getItem("id");
const token = localStorage.getItem("token");
const handleChange = (e) => {
    const {name , value} = e.target;
    setcollection((preval) => ({...preval , [name] : value}));
    console.log(collection)
}

  const handleSubmit =async (e)=>{
     e.preventDefault();
    if (!token) {
      alert("Unauthorized: Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("name" , collection.name);
    formData.append("image" ,image);
    formData.append("userid" , userid)
  

    const response = await axios.post("http://localhost:5656/addcollection",
        formData,
        {headers : {
             Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }}
    );

     alert("Collection uploaded successfully!");
      console.log(response.data);
  setcollection({ name: "" });
    setimage(null);
  }

  return (
    <section className="container-fluid fixed-sidebar">
         <SideComponent />
         <div className="wrapper pb-4">
             <HeaderComponet title="Add Collection" />
             <div className="p-5">
          <h4 className="text-light">Create new item</h4>
          <h5>Image, Video, Audio or 3D Model</h5>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, MP3, WEBM, OGG, GLB,
            GLTF. Max size: 100 MB
          </p>
        </div>
         <div className="card w-50 mx-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-12">
                {/* Item Name */}
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">
                    Collection Name <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    name="name"
                    value={collection.name}
                    onChange={(e) => handleChange(e)}
                    placeholder="RaidParty Fighters"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">
                   Image <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="file"
                    // value="image"
                    className="form-control py-2"
                    onChange={(e) => setimage(e.target.files[0])}
                    required
                  />
                </div>            

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-editor btn-primary redius border-0 text-dark d-inline-flex align-items-center pe-3 ps-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
         </div>
    </section>
  )
}

export default AddCollections