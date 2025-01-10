import { CgTrashEmpty } from "react-icons/cg";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import AlertBox from "../alert-box/AlertBox";
import { FcCheckmark } from "react-icons/fc";

interface AlertDialogBoxProps {
    handleAction: () => void;
    className: string;
    buttonName: string;
    isButtonDisabled?: boolean;
    title: string;
    description?: string;
    cancelText?: string;
    actionText?: string;
}

function AlertDialogBox({
    handleAction,
    className,
    buttonName,
    isButtonDisabled,
    title,
    description,
    cancelText,
    actionText,
}: AlertDialogBoxProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger
                className={className}
                title={buttonName}
                disabled={isButtonDisabled || false}
            >
                {buttonName === "Delete" ? (
                    <CgTrashEmpty size={18} color="#e2e8f0" />
                ) : buttonName === "Edit" ? (
                    <FcCheckmark size={18} color="#e2e8f0" />
                ) : null}
            </AlertDialogTrigger>
            <AlertBox
                handleAction={handleAction}
                title={title}
                description={description}
                cancelText={cancelText}
                actionText={actionText}
            />
        </AlertDialog>
    );
}

export default AlertDialogBox;
