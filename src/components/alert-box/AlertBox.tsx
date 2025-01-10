import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../ui/alert-dialog";

interface AlertBoxProps {
    handleAction: () => void;
    title: string;
    description?: string;
    cancelText?: string;
    actionText?: string;
}

function AlertBox({
    handleAction,
    title,
    description,
    cancelText,
    actionText,
}: AlertBoxProps) {
    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                {description && (
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                )}
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>
                    {cancelText ? cancelText : "Cancel"}
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleAction}>
                    {actionText ? actionText : "Confirm"}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
}

export default AlertBox;
