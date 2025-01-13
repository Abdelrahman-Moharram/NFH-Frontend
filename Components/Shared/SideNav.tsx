'use client'
import Link from "next/link";
import Cookies from "js-cookie"

export default function SideNav() {    
    return (
        <div className={`relative transition-all duration-300 `}>
            
            <div className={`fixed top-[10%] transition-all duration-500  bg-card rounded-full p-1 default-shadow  ${!Cookies.get('access_token')?'mx-[-160px]':'mx-2'}`}>
 
                {/* item */}

                <Link href={"/"} className="block p-5 rounded-full bg-transparent text-color hover:bg-secondary hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="none" stroke="#061631" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 31.5V26.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.6225 4.93501L5.49498 14.6475C4.12998 15.7325 3.25498 18.025 3.55248 19.74L5.87998 33.67C6.29998 36.155 8.67998 38.1675 11.2 38.1675H30.8C33.3025 38.1675 35.7 36.1375 36.12 33.67L38.4475 19.74C38.7275 18.025 37.8525 15.7325 36.505 14.6475L24.3775 4.95251C22.505 3.44751 19.4775 3.44751 17.6225 4.93501Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <Link href={"/"} className="block p-5 rounded-full bg-transparent text-negative-color hover:bg-secondary hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.5 19.075V7.175C38.5 4.55 37.38 3.5 34.5975 3.5H27.5275C24.745 3.5 23.625 4.55 23.625 7.175V19.075C23.625 21.7 24.745 22.75 27.5275 22.75H34.5975C37.38 22.75 38.5 21.7 38.5 19.075Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M38.5 34.825V31.675C38.5 29.05 37.38 28 34.5975 28H27.5275C24.745 28 23.625 29.05 23.625 31.675V34.825C23.625 37.45 24.745 38.5 27.5275 38.5H34.5975C37.38 38.5 38.5 37.45 38.5 34.825Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.375 22.925V34.825C18.375 37.45 17.255 38.5 14.4725 38.5H7.4025C4.62 38.5 3.5 37.45 3.5 34.825V22.925C3.5 20.3 4.62 19.25 7.4025 19.25H14.4725C17.255 19.25 18.375 20.3 18.375 22.925Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.375 7.175V10.325C18.375 12.95 17.255 14 14.4725 14H7.4025C4.62 14 3.5 12.95 3.5 10.325V7.175C3.5 4.55 4.62 3.5 7.4025 3.5H14.4725C17.255 3.5 18.375 4.55 18.375 7.175Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <Link href={"/"} className="block p-5 rounded-full bg-transparent text-negative-color hover:bg-secondary hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 3.5V8.75" stroke="#061631" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28 3.5V8.75" stroke="#061631" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.125 15.9075H35.875" stroke="#061631" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M36.75 14.875V29.75C36.75 35 34.125 38.5 28 38.5H14C7.875 38.5 5.25 35 5.25 29.75V14.875C5.25 9.625 7.875 6.125 14 6.125H28C34.125 6.125 36.75 9.625 36.75 14.875Z" stroke="#061631" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.4657 23.975H27.4814" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.4657 29.225H27.4814" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.9921 23.975H21.0078" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.9921 29.225H21.0078" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.515 23.975H14.5308" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.515 29.225H14.5308" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <Link href={"/"} className="block p-5 rounded-full bg-transparent text-negative-color hover:bg-secondary hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.9049 18.27L36.1899 25.585C34.7199 31.9025 31.8149 34.4575 26.3549 33.9325C25.4799 33.8625 24.5349 33.705 23.5199 33.46L20.5799 32.76C13.2824 31.0275 11.0249 27.4225 12.7399 20.1075L14.4549 12.775C14.8049 11.2875 15.2249 9.99251 15.7499 8.92501C17.7974 4.69001 21.2799 3.55251 27.1249 4.93501L30.0474 5.61751C37.3799 7.33251 39.6199 10.955 37.9049 18.27Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M26.355 33.9325C25.27 34.6675 23.905 35.28 22.2425 35.8225L19.4775 36.7325C12.53 38.9725 8.87249 37.1 6.61499 30.1525L4.37499 23.24C2.13499 16.2925 3.98999 12.6175 10.9375 10.3775L13.7025 9.46755C14.42 9.24005 15.1025 9.04755 15.75 8.92505C15.225 9.99255 14.805 11.2875 14.455 12.775L12.74 20.1075C11.025 27.4225 13.2825 31.0275 20.58 32.76L23.52 33.46C24.535 33.705 25.48 33.8625 26.355 33.9325Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.12 14.9275L30.6075 17.08" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.405 21.7L25.48 22.995" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <Link href={"/"} className="block p-5 rounded-full bg-transparent text-negative-color hover:bg-secondary hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.3225 29.4525L33.005 34.9825C33.18 36.435 31.6225 37.4499 30.38 36.6974L23.0475 32.34C22.2425 32.34 21.455 32.2875 20.685 32.1825C21.98 30.66 22.75 28.735 22.75 26.6525C22.75 21.6825 18.445 17.6575 13.125 17.6575C11.095 17.6575 9.22249 18.235 7.66499 19.25C7.61249 18.8125 7.59497 18.375 7.59497 17.92C7.59497 9.95748 14.5075 3.5 23.0475 3.5C31.5875 3.5 38.5 9.95748 38.5 17.92C38.5 22.645 36.0675 26.8275 32.3225 29.4525Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.75 26.6524C22.75 28.7349 21.98 30.66 20.685 32.1825C18.9525 34.2825 16.205 35.63 13.125 35.63L8.5575 38.3424C7.7875 38.8149 6.80749 38.1675 6.91249 37.275L7.34999 33.8275C5.00499 32.2 3.5 29.5924 3.5 26.6524C3.5 23.5725 5.14501 20.86 7.66501 19.25C9.22251 18.235 11.095 17.6575 13.125 17.6575C18.445 17.6575 22.75 21.6825 22.75 26.6524Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </Link>
                <Link href={"/"} className="block p-5 rounded-full bg-transparent text-negative-color hover:bg-secondary hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 38.5H24.5C33.25 38.5 36.75 35 36.75 26.25V15.75C36.75 7 33.25 3.5 24.5 3.5H17.5C8.75 3.5 5.25 7 5.25 15.75V26.25C5.25 35 8.75 38.5 17.5 38.5Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.875 13.265V15.015C28.875 16.45 27.7025 17.64 26.25 17.64H15.75C14.315 17.64 13.125 16.4675 13.125 15.015V13.265C13.125 11.83 14.2975 10.64 15.75 10.64H26.25C27.7025 10.64 28.875 11.8125 28.875 13.265Z" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.2382 24.5H14.2584" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.9916 24.5H21.0118" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.7451 24.5H27.7653" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.2382 30.625H14.2584" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.9916 30.625H21.0118" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27.7451 30.625H27.7653" stroke="#061631" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>

            </div>
            <div className={`fixed bottom-[30%] transition-all duration-500 delay-150  bg-card rounded-full p-1 default-shadow  ${!Cookies.get('access_token')?'mx-[-160px]':'mx-2'}`}>
                <Link href={"/"} className="block p-5 rounded-full bg-transparent text-negative-color hover:bg-secondary hover:text-white">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 26.25C23.8995 26.25 26.25 23.8995 26.25 21C26.25 18.1005 23.8995 15.75 21 15.75C18.1005 15.75 15.75 18.1005 15.75 21C15.75 23.8995 18.1005 26.25 21 26.25Z" stroke="#061631" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.5 22.54V19.46C3.5 17.64 4.9875 16.135 6.825 16.135C9.9925 16.135 11.2875 13.895 9.695 11.1475C8.785 9.57251 9.3275 7.52501 10.92 6.61501L13.9475 4.88251C15.33 4.06001 17.115 4.55001 17.9375 5.93251L18.13 6.26501C19.705 9.01251 22.295 9.01251 23.8875 6.26501L24.08 5.93251C24.9025 4.55001 26.6875 4.06001 28.07 4.88251L31.0975 6.61501C32.69 7.52501 33.2325 9.57251 32.3225 11.1475C30.73 13.895 32.025 16.135 35.1925 16.135C37.0125 16.135 38.5175 17.6225 38.5175 19.46V22.54C38.5175 24.36 37.03 25.865 35.1925 25.865C32.025 25.865 30.73 28.105 32.3225 30.8525C33.2325 32.445 32.69 34.475 31.0975 35.385L28.07 37.1175C26.6875 37.94 24.9025 37.45 24.08 36.0675L23.8875 35.735C22.3125 32.9875 19.7225 32.9875 18.13 35.735L17.9375 36.0675C17.115 37.45 15.33 37.94 13.9475 37.1175L10.92 35.385C9.3275 34.475 8.785 32.4275 9.695 30.8525C11.2875 28.105 9.9925 25.865 6.825 25.865C4.9875 25.865 3.5 24.36 3.5 22.54Z" stroke="#061631" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
}