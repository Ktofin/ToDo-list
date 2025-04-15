import * as yup from 'yup';

export const todoSchema = yup.object({
    title: yup.string().required('Title is required').min(3, 'Minimum 3 characters'),
    description: yup.string().required('Description is required').min(5, 'Minimum 5 characters'),
});
