import { Modal, Flowbite, CustomFlowbiteTheme } from "flowbite-react";

type TProps = {
  typeModal: "WhatsApp" | "Telegram";
  sendTextObj: () => { contem: boolean; text: string };
  activeModalName: "TeAndWa*" | undefined;
  setActiveModalName: React.Dispatch<
    React.SetStateAction<"TeAndWa*" | undefined>
  >;
};

export const TeAndWaModal = ({
  typeModal,
  sendTextObj,
  activeModalName,
  setActiveModalName,
}: TProps) => {
  const customTheme: CustomFlowbiteTheme = {
    modal: {
      root: {
        base: "fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 h-screen",
      },
    },
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Modal
        show={activeModalName === "TeAndWa*"}
        onClose={() => setActiveModalName(undefined)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </Flowbite>
  );
};
