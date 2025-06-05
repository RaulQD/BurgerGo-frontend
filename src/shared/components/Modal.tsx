import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useAppStore } from '../store/useAppStore';

type ModalProps = {
    title?: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    children?: React.ReactNode;
}

export const Modal = ({
    title,
    description,
    size = 'md',
    children,
}: ModalProps) => {
    const { isOpen, onClose } = useAppStore();

    const modalSize = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
    }[size];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className={`${modalSize}`}>
                <DialogHeader>
                    <DialogTitle className='text-center'>{title}</DialogTitle>
                    <DialogDescription className='text-center'>{description}</DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};
