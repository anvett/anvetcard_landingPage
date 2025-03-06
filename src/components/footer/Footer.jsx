import React from "react";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  return (
    <>
      {/* Footer con enlaces del Navbar */}
      <footer className="bg-navbar py-spacing-4 text-base-content">
        <div>
          <ul className="section-p flex justify-center gap-4 mb-4 text-light">
            <li>
              <Link href="#inicio" className="hover:text-secondary">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#ventajas" className="hover:text-secondary">
                Ventajas
              </Link>
            </li>
            <li>
              <Link href="#contenido" className="hover:text-secondary">
                Contenido
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-secondary">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="hover:text-secondary">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.facebook.com/anvetcorp/?locale=es_LA" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/facebook.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@anvetcorpsas" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/tiktok.png" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/anvetcorp/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/icons/instagram.png" alt="Instagram" width={24} height={24} />
          </a>
          
        </div>
       
      </footer>

      {/* Footer actual */}
      <footer className="text-center p-spacing-1 bg-gradient-primary text-sm text-base-content">
        <p className="section-h5 text-primary">&copy; 2025 Anvetcorp SAS. All rights reserved.</p>
      </footer>
    </>
  );
}
