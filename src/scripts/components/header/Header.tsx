import * as React from 'react';

export default function Header() {
	return (
		<div className="header">
			<div className="header__logo">
				<svg xmlns="http://www.w3.org/2000/svg" width="244" height="28" viewBox="0 0 589 57">
				<defs>
					<linearGradient id="a" x1="0%" x2="102%" y1="0%" y2="101%">
						<stop offset="0%" stopColor="#3023AE"/>
						<stop offset="100%" stopColor="#C86DD7"/>
					</linearGradient>
				</defs>
				<path fill="url(#a)" fillRule="evenodd" d="M17.004 29.54H7.96v20.334H4V4.504h10.957c10.738 0 16.106 4.106 16.106 12.32 0 3.267-.858 5.872-2.574 7.815-1.716 1.943-4.225 3.334-7.525 4.173l12.41 21.062h-4.687L17.004 29.54zm-1.519-3.245c7.57 0 11.354-3.157 11.354-9.472 0-3.09-.946-5.376-2.839-6.855-1.892-1.479-4.95-2.219-9.175-2.219H7.96v18.546h7.525zm51.486 7.75H43.935c.22 4.503 1.287 7.848 3.201 10.034 1.914 2.185 4.434 3.278 7.558 3.278 1.804 0 3.4-.276 4.785-.828 1.387-.552 2.894-1.424 4.522-2.616l1.782 2.45c-1.716 1.414-3.476 2.473-5.28 3.18-1.805.706-3.807 1.06-6.007 1.06-4.577 0-8.163-1.568-10.76-4.703-2.596-3.135-3.894-7.484-3.894-13.048 0-3.665.561-6.877 1.683-9.637 1.123-2.76 2.729-4.901 4.819-6.425 2.09-1.523 4.521-2.285 7.294-2.285 4.4 0 7.745 1.49 10.033 4.471 2.288 2.98 3.432 7.076 3.432 12.286 0 .972-.044 1.899-.132 2.782zm-3.63-3.975c0-3.886-.803-6.921-2.41-9.107-1.606-2.186-3.993-3.279-7.161-3.279-2.86 0-5.17 1.104-6.931 3.312-1.76 2.208-2.728 5.564-2.904 10.068H63.34v-.994zm31.75-14.737c1.54.552 3.036 1.446 4.488 2.683l-1.914 2.516c-1.144-.927-2.321-1.611-3.531-2.053-1.21-.441-2.586-.662-4.126-.662-3.256 0-5.853 1.27-7.789 3.808-1.936 2.54-2.904 6.237-2.904 11.094 0 4.813.957 8.434 2.871 10.863 1.914 2.428 4.5 3.643 7.756 3.643 1.54 0 2.937-.243 4.192-.729 1.254-.486 2.519-1.214 3.795-2.186l1.848 2.584c-2.904 2.472-6.204 3.709-9.9 3.709-2.95 0-5.524-.707-7.724-2.12-2.2-1.413-3.905-3.455-5.115-6.127-1.21-2.67-1.816-5.861-1.816-9.57 0-3.665.605-6.878 1.816-9.637 1.21-2.76 2.915-4.89 5.115-6.392 2.2-1.501 4.753-2.252 7.657-2.252 1.98 0 3.74.276 5.28.828zm29.571 33.084a12.877 12.877 0 0 1-7.26 2.186c-2.641 0-4.71-.784-6.205-2.352-1.497-1.567-2.245-3.83-2.245-6.789V18.347h-5.808v-3.113h5.808v-8.28l3.829-.463v8.743h8.91l-.461 3.113h-8.45v22.917c0 2.03.419 3.543 1.255 4.537.836.993 2.112 1.49 3.828 1.49 1.76 0 3.52-.508 5.28-1.523l1.52 2.649zm10.627-33.183v34.64h-3.828v-34.64h3.828zm.132-14.44c.528.53.792 1.193.792 1.988 0 .795-.264 1.457-.792 1.987s-1.232.795-2.112.795c-.836 0-1.518-.265-2.046-.795-.528-.53-.792-1.192-.792-1.987 0-.795.264-1.457.792-1.987S132.473 0 133.309 0c.88 0 1.584.265 2.112.795zm36.899 14.44l-11.948 34.64h-4.752l-12.344-34.64h4.225l10.495 31.262 10.231-31.262h4.093zm32.343 18.81h-23.036c.22 4.504 1.287 7.849 3.201 10.035 1.914 2.185 4.434 3.278 7.558 3.278 1.804 0 3.4-.276 4.786-.828 1.386-.552 2.893-1.424 4.521-2.616l1.782 2.45c-1.716 1.414-3.476 2.473-5.28 3.18-1.804.706-3.807 1.06-6.007 1.06-4.577 0-8.163-1.568-10.76-4.703-2.596-3.135-3.894-7.484-3.894-13.048 0-3.665.561-6.877 1.684-9.637 1.122-2.76 2.728-4.901 4.818-6.425 2.09-1.523 4.522-2.285 7.294-2.285 4.4 0 7.745 1.49 10.033 4.471 2.288 2.98 3.433 7.076 3.433 12.286 0 .972-.045 1.899-.133 2.782zm-3.63-3.974c0-3.886-.803-6.921-2.41-9.107-1.605-2.186-3.993-3.279-7.161-3.279-2.86 0-5.17 1.104-6.93 3.312-1.761 2.208-2.73 5.564-2.905 10.068h19.406v-.994zm53.928 19.804h-3.828l-2.046-21.725c-.836-8.433-1.408-15.013-1.717-19.737l-11.353 36.097h-3.762l-11.75-36.097c-.22 4.283-.66 9.957-1.32 17.022l-.198 2.583-1.98 21.857h-3.763l4.291-45.37h5.479l11.22 35.302L245.06 4.504h5.545l4.356 45.37zm34.16-30.633c2.574 3.157 3.86 7.562 3.86 13.214 0 5.607-1.308 10.034-3.927 13.28-2.618 3.245-6.193 4.868-10.726 4.868-4.576 0-8.152-1.601-10.726-4.802-2.574-3.202-3.862-7.606-3.862-13.214 0-3.665.594-6.866 1.783-9.604 1.188-2.738 2.882-4.835 5.082-6.292 2.2-1.457 4.797-2.186 7.79-2.186 4.576 0 8.151 1.579 10.725 4.736zm-18.516 2.285c-1.848 2.517-2.772 6.204-2.772 11.061 0 4.813.913 8.478 2.74 10.995 1.825 2.517 4.41 3.775 7.755 3.775 3.345 0 5.952-1.258 7.822-3.775s2.805-6.226 2.805-11.127c0-4.813-.913-8.467-2.739-10.962-1.826-2.495-4.433-3.742-7.822-3.742-3.344 0-5.94 1.258-7.789 3.775zm57.097-2.384c2.2 3.09 3.3 7.506 3.3 13.246 0 5.608-1.155 10.046-3.465 13.313-2.31 3.268-5.534 4.902-9.67 4.902-2.069 0-3.95-.464-5.644-1.391a13 13 0 0 1-4.257-3.71l-.396 4.372h-3.367V1.126l3.829-.464V20.07c2.728-3.71 6.182-5.564 10.363-5.564 4.004 0 7.107 1.546 9.307 4.637zm-3.334 24.473c1.695-2.539 2.542-6.281 2.542-11.227 0-9.802-3.103-14.704-9.307-14.704-2.069 0-3.85.52-5.347 1.557-1.496 1.038-2.904 2.506-4.224 4.404V41.86c1.1 1.722 2.42 3.08 3.96 4.073 1.54.994 3.256 1.49 5.149 1.49 3.124 0 5.533-1.27 7.227-3.808zm28.615-12.286l12.145 18.545h-4.62l-9.967-16.095-9.902 16.095h-4.422l12.145-18.413-10.56-16.227h4.488l8.449 13.843 8.515-13.843h4.356l-10.627 16.095zm41.519-19.606l3.3 7.352-20.858 8.743 20.858 8.478-3.3 7.617-26.403-11.458v-9.207l26.403-11.525zm9.9 38.151v-45.9h27.262l-1.122 7.75h-15.314V23.91h13.334v7.75h-13.334v18.214h-10.825zm59.738-31.362c3.036 3.29 4.554 7.893 4.554 13.81 0 3.753-.693 7.032-2.079 9.836-1.386 2.804-3.366 4.978-5.94 6.524C458.1 50.227 455.052 51 451.531 51c-5.324 0-9.516-1.645-12.574-4.934-3.058-3.29-4.588-7.893-4.588-13.81 0-3.753.693-7.032 2.08-9.836 1.386-2.804 3.366-4.978 5.94-6.524 2.575-1.545 5.622-2.318 9.142-2.318 5.369 0 9.571 1.645 12.608 4.934zm-17.36 5.432c-1.056 1.788-1.584 4.559-1.584 8.312 0 3.841.517 6.645 1.55 8.412 1.035 1.766 2.63 2.649 4.786 2.649 2.113 0 3.697-.894 4.753-2.683 1.056-1.788 1.584-4.559 1.584-8.312 0-3.841-.517-6.645-1.551-8.412-1.034-1.766-2.63-2.649-4.786-2.649-2.112 0-3.696.894-4.752 2.683zm50.628-9.77l-1.65 10.134c-1.32-.31-2.377-.464-3.169-.464-2.068 0-3.641.718-4.72 2.153-1.078 1.435-1.925 3.587-2.54 6.458v17.419h-10.43v-35.17h9.11l.857 6.822c.792-2.429 1.992-4.338 3.598-5.73 1.606-1.39 3.421-2.086 5.445-2.086 1.276 0 2.443.155 3.499.464zm49.374 2.219c1.672 1.876 2.508 4.47 2.508 7.782v25.699h-10.43v-23.91c0-3.135-.99-4.703-2.97-4.703-1.1 0-2.068.375-2.904 1.126-.836.75-1.65 1.899-2.442 3.444v24.043h-10.43v-23.91c0-3.135-.99-4.703-2.97-4.703-1.056 0-2.013.386-2.871 1.16-.858.772-1.683 1.909-2.476 3.41v24.043h-10.429v-35.17h9.11l.725 4.106c1.365-1.766 2.872-3.08 4.522-3.94 1.65-.862 3.531-1.292 5.644-1.292 1.98 0 3.685.486 5.115 1.457 1.43.971 2.475 2.34 3.136 4.107 1.408-1.9 2.959-3.301 4.653-4.206 1.694-.905 3.641-1.358 5.842-1.358 2.772 0 4.994.938 6.667 2.815zm11.815-4.67L585 23.248v9.207l-26.403 11.458-3.3-7.617 20.858-8.478-20.858-8.743 3.3-7.352z"/>
			</svg>
			</div>
			<div className="header__slogan">
				Your Forms library for React+MobX application
			</div>
		</div>
	)
}