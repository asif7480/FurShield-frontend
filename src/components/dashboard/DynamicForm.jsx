import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

function DynamicForm({ fields, onSubmit, defaultValues = {}, schema }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

    const { id } = useParams()
    const isEdit = !!id

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    fields.map((field, index) => (
                        <div key={index}>
                            <label>{field.label}: </label>

                            {!['select', 'radio', 'checkbox'].includes(field.type) && (
                                <input type={field.type || "text"} {...register(field.name)} />
                            )}


                            {/* File Input */}
                            {field.type === "file" && (
                                <input
                                    type="file"
                                    {...register(field.name)}
                                    accept={field.accept || "image/*"}
                                />
                            )}
                            
                            {/* select */}
                            {field.type === "select" && (
                                <select {...register(field.name)}>
                                    <option value="">Select any option</option>
                                    {
                                        field.options?.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))
                                    }
                                </select>
                            )}

                            {/* Checkbox */}
                            {field.type === "checkbox" && (
                                <input type="checkbox" {...register(field.name)} />
                            )}

                            {/* Checkbox Group (multi-selection) */}
                            {field.type === 'checkbox-group' &&
                                field.options?.map((opt) => (
                                    <label key={opt.value} style={{ display: 'block' }}>
                                        <input
                                            type="checkbox"
                                            value={opt.value}
                                            {...register(field.name)}
                                        />
                                        {opt.label}
                                    </label>
                                ))}

                            {/* Errors */}
                            {errors[field.name] && (
                                <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
                            )}


                            <button type="submit">
                                {isEdit ? "update" : "submit"}
                            </button>
                        </div>
                    ))
                }
            </form>
        </>
    )
}

export default DynamicForm