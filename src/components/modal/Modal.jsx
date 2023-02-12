import React, { useState } from "react";
import { RxPencil1 } from "react-icons/rx";
import "./modal.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Modal = () => {
    const nav = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    url: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(createPost())
    nav('/')
  };

  return (
    <>
      <section className="btnCreateContainer">
        <div className="btnCreatePost" onClick={() => setIsOpen(true)}>
          <RxPencil1 className="react-icons" size={30} />
        </div>
      </section>
      {isOpen && <div className="backModal"></div>}
      <div
        className="modalContainer"
        style={{
          width: `25%`,
        }}
      >
        {isOpen && (
          <div className="modalOpened">
            <span className="closeModal" onClick={() => setIsOpen(false)}>
              ❌
            </span>
            <div className="title">Create Post</div>
            <section className="formModal">
            <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        className="input"
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
        value={formData.title}
      />

      <input
        type="text"
        name="body"
        placeholder="Description"
        required
        onChange={handleInputChange}
        value={formData.description}
      />

      <input
        type="text"
        name="url"
        placeholder="URL of the image"
        required
        onChange={handleInputChange}
        value={formData.url}
      />

      <button className="btnCancel" type="reset">
        Cancel
      </button>
      <button className="btnSubmit" type="submit">
        Save
      </button>
    </form>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
