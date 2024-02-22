import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface gameUpdateFormData {
    email: string
}

const GameUpdate: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState,
        reset,
        setError
    } = useForm<gameUpdateFormData>({
        defaultValues: {
            email: '',
        },
    });

    const { isSubmitting, isSubmitSuccessful, errors } = formState;

    const [isGameModalOpen, setIsGameModalOpen] = useState(false);

    const handleGameOpenModal = () => {
        setIsGameModalOpen(true);
    }

    const handleGameCloseModal = () => {
        setIsGameModalOpen(false);
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

    const onArtistSubmit = async (data: gameUpdateFormData) => {
        const requestBody = {
            ...data,
          };


          try {
            const response = await fetch('/api/gameUpdates', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestBody)
            })
            const responseData = await response.json()
            if (response.ok) {
              reset({
                email: '',
              });
            } else {
              throw new Error(responseData.error || 'Game Update Form failed')
            }
          } catch (error: unknown) {
            // Now explicitly stating the type as unknown
            // Perform a type check
            if (error instanceof Error) {
              setError('email', { type: 'submit', message: error.message});
            } else {
              // If it's not an Error instance, you might want to handle it differently
              setError('email', {
                type: 'submit',
                message: 'An unexpected error occured',
              })
            }
          }
    }

    const modalRef = useOutsideClick(handleGameCloseModal) as MutableRefObject<HTMLDivElement | null>;

    return (
        <>
            <motion.button 
                className={`
                rounded-lg border-2 
                border-brand-green-dark py-2 px-4 
                text-lg m-2 transition duration-300
                ease-in-out text-brand-green-light
                hover:bg-brand-green-light hover:text-black`
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 , y: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, y: 0 }}
            onClick={handleGameOpenModal}
            >
                Stay Informed on the Latest Game Developments
            </motion.button>
            {isGameModalOpen && (
                <div className="modal fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none">
                    <div className="modal-content relative w-auto max-w-3xl mx-auto my-6" ref={modalRef}>
                        <div className="relative flex flex-col w-full bg-black text-brand-green-dark border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-brand-green-dark rounded-t">
                                <h3 className="text-3xl font-semibold">Game Development Updates</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-brand-green-dark float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={handleGameCloseModal}
                                >
                                    <span className="text-brand-green-dark h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                                </button>
                            </div>
                            <div className="relative p-6 flex-auto">
                            <form onSubmit={handleSubmit(onArtistSubmit)}>
                                    <label className="block">
                                        Email:
                                        <input
                                            className="mt-1 p-2 border border-brand-green-light placeholder-brand-green-dark rounded-md w-full"
                                            type="text"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address',
                                                },
                                            })}
                                            />
                                        {errors.email && (
                                            <span className="text-red-500">
                                                {errors.email.message}
                                            </span>
                                        )}
                                    </label>
                                    <button
                                        className="mt-4 bg-brand-green-dark text-black py-2 px-4 rounded"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <svg
                                                className="w-6 h-6 mx-auto animate-spin"
                                                fill="none"
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    d="M16 32c-8.837 0-16-7.163-16-16s7.163-16 16-16c1.294 
                                                    0 2.56.158 3.782.45.591.14.789-.813.293-1.13C18.305 1.467 
                                                    17.177 1 16 1 7.163 1 1 7.163 1 16s6.163 15 15 15c7.424 0 
                                                    13.601-5.424 14.768-12.533.111-.673-.747-.974-1.206-.457C28.305 
                                                    9.467 22.177 15 16 15z"
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                </form>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-brand-green-dark rounded-b">
                            {isSubmitSuccessful && (
                                <span className="text-green-500">
                                    Thank you for subscribing to game updates!
                                </span>
                                )}
                                {formState.errors.email && (
                                    <span className="text-red-500">{formState.errors.email.message}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
                                  
        </>
    )
}

export default GameUpdate;