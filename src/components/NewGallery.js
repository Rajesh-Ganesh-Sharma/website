import Link from "next/link";
import React from "react";

function NewGallery() {
  const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <div className="new_gallery_container">
        <div className="container ">
          <div className="slide_container to_left  ">
            {tempArray.map((e, i) => {
              console.log(e);
              return (
                <div key={i} className=" slide_image">
                  <img src={`assets/gallery/${e}.jpg`} alt="" />
                </div>
              );
            })}
            {tempArray.map((e, i) => {
              return (
                <div key={i} className=" slide_image">
                  <img src={`assets/gallery/${e}.jpg`} alt="" />
                </div>
              );
            })}
          </div>

          {/* To Right */}
          <div className="slide_container to_right mt-24">
            {tempArray.map((e, i) => {
              console.log(e);
              return (
                <div key={i} className=" slide_image">
                  <img src={`assets/gallery/${e}.jpg`} alt="" />
                </div>
              );
            })}
            {tempArray.map((e, i) => {
              return (
                <div key={i} className=" slide_image">
                  <img src={`assets/gallery/${e}.jpg`} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        {/* <h1>View Gall/</h1> */}
        <Link href={"/gallery"} className="info_readMore">
          View Gallery
        </Link>
      </div>
      <div className="gallery_bottom">
        <img
          src={"assets/gallery/gallery_vector.svg"}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}

export default NewGallery;
