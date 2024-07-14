import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const NotificationHandler = (props) => {
  const [activeToaster, setActiveToaster] = useState("");

  useEffect(() => {
    const selectToaster = () => {
      let customId = props.customId;
      setActiveToaster(customId);
    };
    selectToaster();
  }, [activeToaster]);

  let notifyContainer;

  switch (activeToaster) {
    case "contact-notify-1":
      notifyContainer = (
        <>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white",
              duration: 5000,

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      );
      break;

    case "contact-notify-2":
      notifyContainer = (
        <>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white",
              duration: 5000,

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      );
    case "copy-notify-1":
      notifyContainer = (
        <>
          <Toaster
            position="bottom-left"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white",
              duration: 5000,

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      );
    case "copy-notify-2":
      notifyContainer = (
        <>
          <Toaster
            position="bottom-left"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white",
              duration: 5000,

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      );
    case "newsletter-notification-1":
      notifyContainer = (
        <>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white",
              duration: 5000,

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      );
    case "newsletter-notification-1":
      notifyContainer = (
        <>
          <Toaster
            position="top-left"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white",
              duration: 5000,

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      );
case "newsletter-notification-1":
      notifyContainer = (
        <>
          <Toaster
            position="top-left"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white",
              duration: 5000,

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      );
      case "create-notifications":
        notifyContainer = (
          <>
            <Toaster
              position="top-left"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: "bg-black text-white",
                duration: 5000,
  
                // Default options for specific types
                success: {
                  duration: 3000,
                  theme: {
                    primary: "green",
                    secondary: "black",
                  },
                },
              }}
            />
          </>
        );
  
    default:
      notifyContainer = (
        <>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white",
              duration: 5000,

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      );
  }

  return <>{notifyContainer}</>;
};

export default NotificationHandler;
