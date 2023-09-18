import React, { useState } from "react";
import GaleryCard from "@/components/GaleryCard";
import Image from "next/image";
import { collections } from "./../data/collections";

export default function Galerie() {
  const [idImage, setIdImage] = useState("0");
  const modalItem = collections[idImage];

  return (
    <>
      <section id="galerie" className="mt-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Galerie</h2>
          </div>
          <div className="services mt-5">
            {collections.map((collection, index) => (
              <GaleryCard
                key={index}
                collection={collection}
                setIdImage={setIdImage}
              />
            ))}
            {/* Modal */}
            <div
              className="modal fade"
              id="modal"
              tabIndex="-1"
              aria-labelledby="modalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title fs-5" id="modalLabel">
                      {modalItem.titre}
                    </h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Image
                      className="modal-img"
                      src={`/images/galery/${modalItem.image}`}
                      alt={modalItem.description}
                      width={modalItem.width}
                      height={modalItem.height}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
