"use client";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="text-center">
      <Modal
        title="Modal Test"
        description="Description Test."
        isOpen
        onClose={() => {}}
      >
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
