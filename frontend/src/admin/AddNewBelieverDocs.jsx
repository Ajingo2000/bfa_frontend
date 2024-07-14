import React, { useState } from "react";
import AdminTemplate from "./AdminTemplate";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import NotificationHandler from "../constants/NotificationHandler";
import SyncLoader from "react-spinners/SyncLoader";
import MultiSelectDiv from "../constants/MultiSelectDiv";
import slugify from 'react-slugify';


const AddNewBelieverDocs = () => {
  const customId = "create-notifications";
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [doc_number, setDocNumber] = useState("");
  const [pdf_doc, setPdfDoc] = useState(null);
  const [description, setDescription] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}


  const handleFileChange = (e) => {
    setPdfDoc(e.target.files[0]);
  };

  const createDocument = (e) => {
    e.preventDefault();
    toast.loading("Sending...");
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("doc_number", doc_number);
    formData.append("pdf_doc", pdf_doc);
    formData.append("description", description);

    axios
      .post(`${apiUrl}new-believer-documents-create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      })
      .then((response) => {
        toast.success("Document uploaded successfully");
        setIsLoading(false);
        setName("");
        setSlug("");
        setDocNumber("");
        setPdfDoc(null);
        setDescription("");
        setUploadProgress(0);
      })
      .catch((error) => {
        toast.error("Error uploading document");
        setIsLoading(false);
        setUploadProgress(0);
        console.error(error);
      });
  };

  return (
    <AdminTemplate pageTitle={"Add New Believer Documents"}>
      <main className="px-4 lg:px-14 size-full">
        <section className="mt-10 flex flex-col border rounded-xl shadow-xl bg-white size-full">
          <section className="text-bold text-2xl flex items-center gap-5 p-4 border-b-2 rounded-t-xl size-full">
            <AddCircleIcon />
            <p className="">ADD NEW BELIEVER DOCUMENTS.</p>
          </section>

          <section className="">
            <form enctype="multipart/form-data" onSubmit={createDocument}>
              <div className="flex flex-col p-4 gap-4">
                <input
                  type="text"
                  name="name"
                  className="pl-4 lg:pl-7 bg-gray-100 h-14 rounded-lg"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyUp={(e) => setSlug(slugify(e.target.value))}
                  required
                />

                <input
                  type="text"
                  name="slug"
                  className="pl-4 lg:pl-7 bg-gray-100 h-14 rounded-lg"
                  placeholder="Enter slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />

                <input
                  type="number"
                  name="doc_number"
                  className="pl-4 lg:pl-7 bg-gray-100 h-14 rounded-lg"
                  placeholder="Enter document number"
                  value={doc_number}
                  onChange={(e) => setDocNumber(e.target.value)}
                  required
                />

                <div className="flex">
                  <p className="p-3 font-bold bg-white rounded-l-lg border">
                    PDF Document
                  </p>
                  <div className="p-3 accent-white flex justify-center items-center rounded-r-lg border">
                    <input
                      type="file"
                      name="pdf_doc"
                      className="size-full"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>
                <textarea
                  name="description"
                  cols="30"
                  rows="10"
                  className="pl-4 lg:pl-7 bg-gray-100 h-36 rounded-lg"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                {uploadProgress > 0 && (
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div
                      className="bg-teal-500 h-4 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    className={`p-3 rounded-lg bg-teal-500 text-white`}
                    type="submit"
                  >
                    {isLoading === true ? <SyncLoader /> : "Add"}
                  </button>
                  <NotificationHandler customId={customId} />
                </div>
              </div>
            </form>
          </section>
        </section>
      </main>
    </AdminTemplate>
  );
};

export default AddNewBelieverDocs;
