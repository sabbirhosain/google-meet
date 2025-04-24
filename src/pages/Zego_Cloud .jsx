import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { ZegoSuperBoardManager } from "zego-superboard-web";

const Zego_Cloud = () => {
  const roomID = '12345';

  let myMeeting = async (element) => {
    const appID = Number(import.meta.env.VITE_APP_ID);
    const serverSecret = import.meta.env.VITE_SERVICE_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), 'sabbir-hosain');

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Display the whiteboard
    zp.addPlugins({ ZegoSuperBoardManager }),

      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Shear Link',
            url:
              window.location.protocol + '//' +
              window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],

        // group call
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // 1-on-1 calls [ZegoUIKitPrebuilt.OneONoneCall].
        },

        showWhiteboard: true, // Display the whiteboard button in the UI

        // camera regulation
        videoResolutionList: [
          ZegoUIKitPrebuilt.VideoResolution_180P,
          ZegoUIKitPrebuilt.VideoResolution_360P,
          ZegoUIKitPrebuilt.VideoResolution_480P,
          ZegoUIKitPrebuilt.VideoResolution_720P,
        ],
        videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_720P,

        // Meeting join and leave alart
        onJoinRoom: () => {
          alert("Joined after approval ✅");
        },
        onLeaveRoom: () => {
          alert("User left the room");
        },

        // Avatar
        onUserAvatarSetter: (userList) => {
          userList.forEach(user => {
            user.setUserAvatar(`/public/avatar.png`)
          })
        },

      });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

export default Zego_Cloud 