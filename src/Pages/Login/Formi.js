import React from 'react'
import { useField, ErrorMessage } from 'formik';

export const Formi =({label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>


            <input 
            className={ `form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}` }
            {...field} {...props}
            autoComplete='off'
            />
            <ErrorMessage component="div"  name={field.name} className="error"/>
        </div>
    )
}