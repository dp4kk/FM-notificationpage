import React, {useState} from 'react'
import mark from '../images/images/avatar-mark-webber.webp'
import angela from "../images/images/avatar-angela-gray.webp";
import jacob from '../images/images/avatar-jacob-thompson.webp';
import rizky from '../images/images/avatar-rizky-hasanuddin.webp';
import kimberly from "../images/images/avatar-kimberly-smith.webp";
import nathan from "../images/images/avatar-nathan-peterson.webp";
import anna from "../images/images/avatar-anna-kim.webp";
import chess from "../images/images/image-chess.webp";
const Homepage = () => {
  const [readNotification,setReadNotification] =useState(false)
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-200">
      <div className="w-[80%] max-w-[550px]  bg-white rounded-lg p-6">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">
            Notifications{" "}
            <span
              className={`bg-sky-950 text-white text-[0.85rem] rounded-sm px-2 py-0.5 ${
                !readNotification ? "opacity-1" : "opacity-0"
              } transition-all duration-300`}
            >
              3
            </span>
          </p>
          <p
            className="text-[0.85rem] text-gray-500 font-medium cursor-pointer"
            onClick={() => setReadNotification(true)}
          >
            Mark all as read
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div
            className={`flex py-2 rounded-md gap-3 sm:gap-1 ${
              !readNotification ? "bg-blue-50" : "bg-white"
            } transition-all duration-300`}
          >
            <div className="w-[20%] sm:w-[10%] ">
              <img
                src={mark}
                alt="mark"
                className="w-10 sm:w-8 object-cover ml-3"
              />
            </div>
            <div className="w-[80%] sm:w-[90%]">
              <p className="text-sm text-gray-400 font-medium">
                <span className="text-blue-950 font-semibold">Mark Weber</span>{" "}
                reacted to your recent post{" "}
                <span className="text-blue-950 font-semibold">
                  My first tournament today!
                </span>
                <span
                  className={`ml-1 text-red-600 ${
                    !readNotification ? "opacity-1" : "opacity-0"
                  } transition-all duration-300`}
                >
                  ●
                </span>
              </p>

              <p className="text-[0.75rem] text-gray-400 font-medium">1m ago</p>
            </div>
          </div>

          <div
            className={`flex py-2 rounded-md gap-3 sm:gap-1 ${
              !readNotification ? "bg-blue-50" : "bg-white"
            } transition-all duration-300`}
          >
            <div className="w-[20%] sm:w-[10%] ">
              <img
                src={angela}
                alt="angela"
                className="w-10 sm:w-8 object-cover ml-3"
              />
            </div>
            <div className="w-[80%] sm:w-[90%]">
              <p className="text-sm text-gray-400 font-medium">
                <span className="text-blue-950 font-semibold">Angela Gray</span>{" "}
                followed you
                <span
                  className={`ml-1 text-red-600 ${
                    !readNotification ? "opacity-1" : "opacity-0"
                  } transition-all duration-300`}
                >
                  ●
                </span>
              </p>

              <p className="text-[0.75rem] text-gray-400 font-medium">5m ago</p>
            </div>
          </div>

          <div
            className={`flex py-2 rounded-md gap-3 sm:gap-1 ${
              !readNotification ? "bg-blue-50" : "bg-white"
            } transition-all duration-300`}
          >
            <div className="w-[20%] sm:w-[10%] ">
              <img
                src={jacob}
                alt="jacob"
                className="w-10 sm:w-8 object-cover ml-3"
              />
            </div>
            <div className="w-[80%] sm:w-[90%]">
              <p className="text-sm text-gray-400 font-medium">
                <span className="text-blue-950 font-semibold">
                  Jacob Thompson
                </span>{" "}
                has joined your group{" "}
                <span className="text-blue-950 font-semibold">Chess Club</span>
                <span
                  className={`ml-1 text-red-600 ${
                    !readNotification ? "opacity-1" : "opacity-0"
                  } transition-all duration-300`}
                >
                  ●
                </span>
              </p>

              <p className="text-[0.75rem] text-gray-400 font-medium">
                1 day ago
              </p>
            </div>
          </div>

          <div className="flex  py-2 rounded-md gap-3 sm:gap-1">
            <div className="w-[20%] sm:w-[10%] ">
              <img
                src={rizky}
                alt="rizky"
                className="w-10 sm:w-8 object-cover ml-3"
              />
            </div>
            <div className="w-[80%] sm:w-[90%]">
              <p className="text-sm text-gray-400 font-medium">
                <span className="text-blue-950 font-semibold">
                  Rizky Hasanuddin
                </span>{" "}
                sent you a private message{" "}
              </p>

              <p className="text-[0.75rem] text-gray-400 font-medium">
                5 days ago
              </p>
              <div className="text-[0.85rem] border border-gray-300 mt-1 text-gray-500 font-medium p-3 rounded-md cursor-pointer hover:bg-sky-100 transition-all">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </div>
            </div>
          </div>

          <div className="flex  py-2 rounded-md gap-3 sm:gap-1">
            <div className="w-[20%] sm:w-[10%] ">
              <img
                src={kimberly}
                alt="kimberly"
                className="w-10 sm:w-8 object-cover ml-3"
              />
            </div>
            <div className="w-[80%] sm:w-[90%] flex gap-1 sm:justify-between">
              <div className="w-[90%]">
                <p className="text-sm text-gray-400 font-medium">
                  <span className="text-blue-950 font-semibold">
                    Kimberly Smith
                  </span>{" "}
                  commented on your picture{" "}
                </p>

                <p className="text-[0.75rem] text-gray-400 font-medium">
                  1 day ago
                </p>
              </div>
              <div className="w-[20%] sm:w-[10%] sm:ml-32 ">
                <img
                  src={chess}
                  className=" object-cover w-10 sm:w-8 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex py-2 rounded-md gap-3 sm:gap-1">
            <div className="w-[20%] sm:w-[10%] ">
              <img
                src={nathan}
                alt="nathan"
                className="w-10 sm:w-8 object-cover ml-3"
              />
            </div>
            <div className="w-[80%] sm:w-[90%]">
              <p className="text-sm text-gray-400 font-medium">
                <span className="text-blue-950 font-semibold">
                  Nathan Peterson
                </span>{" "}
                reacted to your recent post{" "}
                <span className="text-blue-950 font-semibold">
                  5 end-game strategies to increase your win rate
                </span>
              </p>

              <p className="text-[0.75rem] text-gray-400 font-medium">1m ago</p>
            </div>
          </div>

          <div className="flex  py-2 rounded-md gap-3 sm:gap-1">
            <div className="w-[20%] sm:w-[10%] ">
              <img
                src={anna}
                alt="anna"
                className="w-10 sm:w-8 object-cover ml-3"
              />
            </div>
            <div className="w-[80%] sm:w-[90%]">
              <p className="text-sm text-gray-400 font-medium">
                <span className="text-blue-950 font-semibold">Anna Kim</span>{" "}
                left the group{" "}
                <span className="text-blue-950 font-semibold">Chess Club</span>
              </p>

              <p className="text-[0.75rem] text-gray-400 font-medium">1m ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage