import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

interface partnershipFormData {
    first_name: string,
    last_name: string,
    email: string,
    purpose: string;
    message: string
}

const schema = object().shape({
    first_name: string().required('First name is required'),
    last_name: string().required('Last name is required'),
    email: string()
      .required('Email is required')
      .email('Invalid email address'),
    purpose: string().required('Purpose is required'),
    message: string().required('Message is required'),
  }); 

const Partnership: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState,
        reset,
        setError
    } = useForm<partnershipFormData>({
       resolver: yupResolver(schema),
    });

    const { isSubmitting, isSubmitSuccessful, errors } = formState;

    const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsPartnerModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsPartnerModalOpen(false);
    };

    const useOutsideClick = (callback: () => void): MutableRefObject<HTMLDivElement | null> => {
        const modalRef = useRef<HTMLDivElement | null>(null);

        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                callback();
            }
        };

        useEffect(() => {
            document.addEventListener('click', handleClickOutside, true);
            return () => {
                document.removeEventListener("click", handleClickOutside, true);
            };
        }, []);

        return modalRef;
    }

    const onPartnerSubmit = async (data: partnershipFormData) => {
        const requestBody = {
            ...data,
          };


          try {
            const response = await fetch('/api/partnerUpdates', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestBody)
            })
            const responseData = await response.json()
            if (response.ok) {
              // If the response is ok, do nothing
            } else {
                // If the response is not ok, throw an error
              throw new Error(responseData.error || 'Partnership Form failed')
            }
          } catch (error: unknown) {
            // Now explicitly stating the type as unknown
            // Perform a type check
            if (error instanceof Error) {
                const fields = ['first_name', 'last_name', 'email', 'purpose', 'message'] as const;
                fields.forEach((field) => {
                  setError(field, { type: 'submit', message: (error as Error).message });
                });
              } else {
                // If it's not an Error instance, you might want to handle it differently
                // Set the error for each field with the type 'submit' and a generic error message
                const fields = ['first_name', 'last_name', 'email', 'purpose', 'message'] as const;
                fields.forEach((field) => {
                  setError(field, {
                    type: 'submit',
                    message: 'An unexpected error occurred',
                  });
                });
              }
          }
    }

    const modalRef = useOutsideClick(handleCloseModal) as MutableRefObject<HTMLDivElement | null>;

    return (
        <>
            <h1 className="text-brand-green-light text-3xl font-semibold mt-20">Interested in More?</h1>
            <button 
                className={`
                    rounded-lg border-2 
                    border-brand-green-dark py-2 px-10 
                    text-lg m-2 mt-12 transition duration-300
                    ease-in-out text-brand-green-light
                    hover:bg-brand-green-light hover:text-black`
                }
                onClick={handleOpenModal}
            >
                Explore Partnership Opportunities
            </button>

            {isPartnerModalOpen && (
                <div className="modal fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none">
                    <div className="modal-content relative w-auto max-w-3xl mx-auto my-6" ref={modalRef}>
                        <div className="relative flex flex-col w-full bg-black text-brand-green-dark border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-brand-green-dark rounded-t">
                                <h3 className="text-3xl font-semibold">Discover Partnership Opportunities</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-brand-green-dark float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={handleCloseModal}
                                >
                                    <span className="text-brand-green-dark h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                                </button>
                            </div>
                            <div className="relative p-6 flex-auto">
                                <form onSubmit={handleSubmit(onPartnerSubmit)}>
                                    <label className="block">
                                        First name:
                                        <input
                                            className="mt-1 p-2 text-black border rounded-md w-full"
                                            type="text"
                                            {...register('first_name')}
                                        />
                                        {errors.first_name && (
                                            <span className="text-red-500">{errors.first_name.message}</span>
                                        )}
                                    </label>
                                    <label className="block">
                                        Last name:
                                        <input
                                            className="mt-1 p-2 text-black border rounded-md w-full"
                                            type="text"
                                            {...register('last_name')}
                                        />
                                        </label>
                                    <label className="block">
                                        Email:
                                        <input
                                            className="mt-1 p-2 text-black border rounded-md w-full"
                                            type="text"
                                            {...register('email')}
                                        />
                                    </label>
                                    <label className="block mt-4">
                                        Purpose:
                                        <select
                                            className="mt-1 p-2 border text-black rounded-md w-full"
                                            {...register('purpose')}
                                        >
                                            <option value="">Select purpose</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="referrals">Referrals</option>
                                            <option value="sponsor">Sponsor</option>
                                            <option value="invest">Invest</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.purpose && (
                                            <span className="text-red-500">{errors.purpose.message}</span>
                                        )}
                                        <button
                                            className="mt-4 border border-brand-green-dark text-brand-green-dark
                                                py-2 px-4 rounded transition duration-300 ease-in-out
                                                hover:bg-brand-green-light hover:text-black"
                                        >
                                            Submit
                                        </button>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Partnership;