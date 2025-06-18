import type { ControllerRenderProps } from 'react-hook-form';
import type { ChangePassWordForm } from '../types/profile.types';
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';

type PasswordFieldProps = {
    field: ControllerRenderProps<ChangePassWordForm>;
    label: string;
    placeholder: string;
    error?: string;
    className?: string;
};

export const PasswordField = ({
    field,
    label,
    placeholder,
    error,
    className,
}: PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const hasError = !!error;
    return (
        <FormItem>
            <FormLabel className='text-sm'>{label}</FormLabel>
            <div className='relative'>
                <FormControl>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder={placeholder}
                        {...field}
                        className={`text-sm py-6 px-4 pr-12 ${className}`}
                    />
                </FormControl>
                {showPassword ? (
                    <EyeIcon
                        className={`absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer ${
                            hasError ? 'text-red-400' : 'text-gray-400'
                        }`}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                ) : (
                    <EyeClosedIcon
                        className={`absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer ${
                            hasError ? 'text-red-400' : 'text-gray-400'
                        }`}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>
            <FormMessage />
        </FormItem>
    );
};
