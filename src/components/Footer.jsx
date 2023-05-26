import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4">
      <div className="top py-10 border-t bg-base-200 text-base-content border-base-300 flex justify-between">
        <div className="social flex flex-col justify-center my-auto">
          <h4 className="font-bold mb-4">FOLLOW US ON</h4>{" "}
          <div className="icons">
            <FacebookIcon className="mx-1" />
            <InstagramIcon className="mx-1" />
            <TwitterIcon className="mx-1" />{" "}
          </div>{" "}
        </div>
        <div className="address flex flex-col justify-center">
          <h4 className="font-bold mb-4">CONTACT US</h4>
          <span>No1. lorem ipsum dolor sit amet, Yangon.</span>

          <span>+959 958 905 151</span>
          <span>hashtag@gmail.com</span>
        </div>
        <div className="subscribe flex flex-col justify-center">
          <h4 className="font-bold mb-4">Let's Keep On Touch With</h4>
          <div className="form-control w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="username@gmail.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom py-4 border-t bg-base-200 text-base-content border-base-300 flex justify-between">
        <p className="font-bold">LOGO</p>
        <p>©2023 by Hashtag Team. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer