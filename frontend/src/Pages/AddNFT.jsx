import axios from "axios";
import { useState } from "react";
import SideComponent from "./Componets/SideComponent";
import HeaderComponet from "./Componets/HeaderComponet";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddNFT = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  // console.log("userId: ", userId)
  const [nft, setNft] = useState({
    name: "",
    description: "",
    collectionid:"",
    saleprice: 0,
    discount: 0,
    
  });
  const [image, setImage] = useState();
  const [collection , setcollection] = useState();

  const fetchcollection = async() => {
    const response = await axios.get(`http://localhost:5656/getcollections/${userId}`);
    setcollection(await response.data)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Unauthorized: Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("name", nft.name);
    formData.append("description", nft.description);
    formData.append("saleprice", nft.saleprice);
    formData.append("discount", nft.discount);
    formData.append("image", image);
    formData.append("collectionid", nft.collectionid)

    try {
      const response = await axios.post(
        "http://localhost:5656/addnft",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("NFT uploaded successfully!");
      console.log(response.data);
       navigate("/profile")
      // Reset form
      setNft({
        name: "",
        description: "",
        saleprice: 0,
        discount: 0,
      });
      setImage(null);
    } catch (error) {
      console.error("Upload failed:", error);
      alert(
        "Upload failed: " +
          (error?.response?.data?.message || error.message)
      );
    }
  };
  
  useEffect(() =>{
    fetchcollection();
  })
  return (
    <section className="container-fluid fixed-sidebar">
      <SideComponent />
      <div className="wrapper pb-4">
        <HeaderComponet title="AddNFT" />

        <div className="p-5">
          <h4 className="text-light">Create new item</h4>
          <h5>Image, Video, Audio or 3D Model</h5>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, MP3, WEBM, OGG, GLB,
            GLTF. Max size: 100 MB
          </p>
        </div>

        <div className="card w-50 mx-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                {/* Item Name */}
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">
                    Item Name <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    name="name"
                    value={nft.name}
                    onChange={handleChange}
                    placeholder="RaidParty Fighters"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">
                    Upload File <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="file"
                    className="form-control py-2"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </div>

                {/* Description */}
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">Description</label>
                  <textarea
                    className="form-control py-2"
                    name="description"
                    placeholder="Provide a detailed description of your item."
                    value={nft.description}
                    rows="5"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                  <div className="d-flex flex-column mb-3">
  <label className="form-label text-light">Select Collection</label>
  <select
    className="form-control py-2"
    name="collectionid"
    value={nft.collectionid}
    onChange={handleChange}
    required
  >
    <option value="">-- Select Collection --</option>
    {collection && collection.map((collection) => (
      <option key={collection._id} value={collection._id}>
        {collection.name}
      </option>
    ))}
  </select>
</div>

                {/* Sale Price */}
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">
                    Instant Sale Price <span className="grayscale-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="saleprice"
                    className="form-control py-2"
                    value={nft.saleprice}
                    onChange={handleChange}
                    placeholder="Enter price"
                    required
                  />
                </div>

                {/* Royalties / Discount */}
                <div className="d-flex flex-column mb-3">
                  <label className="form-label text-light">Royalties</label>
                  <input
                    type="number"
                    className="form-control py-2"
                    name="discount"
                    value={nft.discount}
                    onChange={handleChange}
                    placeholder="e.g. 10%"
                    required
                  />
                  <small className="text-muted">
                    Suggested: 10%, 20%, 30%
                  </small>
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
  );
};

export default AddNFT;
