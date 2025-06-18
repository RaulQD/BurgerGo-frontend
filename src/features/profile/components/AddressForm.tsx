import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Building2, Home } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { AddressFormData } from '../types/profile.types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const houseType = [
    { label: 'Casa', value: 'home', icon: <Home className='w-4 h-4 mr-1' /> },
    {
        label: 'Oficina',
        value: 'work',
        icon: <Building2 className='w-4 h-4 mr-1' />,
    },
];

export const AddressForm = () => {
    const initialValues: AddressFormData = {
        houseType: '', // Default value, can be changed as needed
        address: '',
    };
    const form = useForm({
        defaultValues: initialValues,
    });

    return (
        <Form {...form}>
            <form>
                <div className='flex flex-col gap-6'>
                    <FormField
                        control={form.control}
                        name='houseType'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='mb-4'>
                                    Tipo de direcciones
                                </FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className='flex items-center'>
                                        {houseType.map((type) => (
                                            <FormItem
                                                key={type.value}
                                                className='flex items-center gap-3 border border-gray-300 px-3 py-2 rounded-md'>
                                                <FormControl>
                                                    <RadioGroupItem
                                                        value={type.value}
                                                        id={type.value}
                                                    />
                                                </FormControl>
                                                <FormLabel
                                                    htmlFor={type.value}
                                                    className='cursor-pointer'>
                                                    <div className='flex items-center'>
                                                        {type.icon}
                                                        {type.label}
                                                    </div>
                                                </FormLabel>
                                            </FormItem>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='address'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dirección</FormLabel>
                                <FormControl>
                                    <Input
                                        type='text'
                                        placeholder='Ingresa tu dirección'
                                        className='text-sm py-6 px-4'
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className='mt-6 flex items-center justify-center gap-4'>
                    <Button>Cancelar</Button>
                    <Button>Guardar</Button>
                </div>
            </form>
        </Form>
    );
};
