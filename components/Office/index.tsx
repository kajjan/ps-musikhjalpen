import Image from "next/image";
import { useState } from "react";
import { OfficeData } from "../../types";
import Modal from "../Modal";


export default function Office(props: {
  officeData: OfficeData;
  image: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    
    <div className="w-full h-fit max-w-sm rounded-lg shadow-md bg-emerald-800 border-emerald-700 border">
      <Image
        priority
        className="pb-4 rounded-t-lg object-cover h-36 grayscale-[50%] hover:grayscale-0 transition ease-in-out duration-300"
        src={"/" + props.image}
        alt="city image"
        width={400}
        height={400}
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight">
          {props.officeData.name}
        </h5>

        <h3 className="text-3xl font-bold">
          {props.officeData.totalAmount} SEK 
        </h3>

        <div className="flex justify-between pt-2">
          <button
            className="bg-emerald-700 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={openModal}
          >
            See all donations ({props.officeData.allDonos.length})
          </button>

          <button>
            <span className="font-bold bg-rose-700 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 rounded-lg text-sm px-5 py-2.5 text-center">
              <a
                href={props.officeData.donoUrl}
                target="_blank"
                rel="noreferrer"
              >
                DONATE 
                
              </a>
            </span>
          </button>
        </div>
        <div className="pt-2">
          {props.officeData.topD && (
            <p className="text-l">
              Top donator:{" "}
              {props.officeData?.topD?.name
                ? props.officeData?.topD?.name
                : "Anonymous"}
              , {props.officeData.topD?.amount} SEK
            </p>
          )}
          <p>
            {" "}
            Latest donator:{" "}
            {props.officeData.allDonos[0].name
              ? props.officeData.allDonos[0].name
              : "Anonymous"}
            , {props.officeData.allDonos[0].amount} SEK{" "}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-0.5 mt-5 mb-5" />
          <h5 className="text-xl font-semibold tracking-tight text-center" >
          {props.officeData.name}'s Milestones </h5>
          <p></p>
        </div>
        <div className="flex justify-between text-right pt-2">
          1000kr: 
          <button>
            <span className="pl-3 flex ">
            {props.officeData.milestone1}
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          2000kr: 
          <button>
            <span className="pl-3 flex ">
            {props.officeData.milestone2}  
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          3000kr: 
          <button>
            <span className="pl-3 flex text-right">
            {props.officeData.milestone3}  
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          4000kr: 
          <button>
            <span className="pl-3 flex text-right">
            {props.officeData.milestone4} 
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          5000kr: 
          <button>
            <span className="pl-3 flex text-right">
            {props.officeData.milestone5}
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          6000kr: 
          <button>
            <span className="pl-3 flex text-right">
            {props.officeData.milestone6} 
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          7000kr: 
          <button>
            <span className="pl-3 flex text-right">
            {props.officeData.milestone7}  
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          8000kr: 
          <button>
            <span className="pl-3 flex text-right">
            {props.officeData.milestone8}  
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          9000kr: 
          <button>
            <span className="pl-3 flex text-right">
            {props.officeData.milestone9}  
            </span>
          </button>
        </div>
        <div className="flex justify-between pt-2">
          10000kr: 
          <button>
            <span className="pl-1 flex text-right"> 
            {props.officeData.milestone10} 
            </span>
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        officeName={props.officeData.name}
        donations={props.officeData.allDonos}
      />
    </div>
  );
}
