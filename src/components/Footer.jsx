import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="flex h-full items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-pretty">
                    <p className="font-mono text-sm text-dark">
                        Desarrollado en{' '}
                        <a
                            href="https://react.dev/"
                            className="font-bold text-md text-accent hover:underline"
                        >
                            React{' '}
                        </a>
                        con{' '}
                        <a
                            href="https://tailwindcss.com/"
                            className="font-bold text-accent hover:underline"
                        >
                            TailwindCSS
                        </a>
                        . Codificado en{' '}
                        <a
                            href="https://code.visualstudio.com/"
                            className="font-bold text-accent hover:underline"
                        >
                            Visual Studio Code{' '}
                        </a>
                        y desplegado en{' '}
                        <a
                            href="https://www.netlify.com/"
                            className="font-bold text-accent hover:underline"
                        >
                            Netlify.{' '}
                        </a>
                        Podrás encontrar el código en el repositorio de{' '}
                        <a
                            href="https://github.com/omarlm/react-poke-api"
                            className="font-bold text-accent hover:underline"
                        >
                            GitHub.
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer
