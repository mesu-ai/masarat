const PlayButtonIcon = ({ height = 157, width = 157, className = '' }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="78.5" cy="78.5" r="78.5" fill="white" fillOpacity="0.06" />
			<circle cx="78.5" cy="78.5" r="57.5" fill="white" fillOpacity="0.2" />
			<circle cx="78.5" cy="78.5" r="39.5" fill="#1CC5DC" />
			<path
				d="M89.5 76.4019C91.5 77.5566 91.5 80.4434 89.5 81.5981L74.5 90.2583C72.5 91.413 70 89.9697 70 87.6603V70.3397C70 68.0303 72.5 66.587 74.5 67.7417L89.5 76.4019Z"
				fill="white"
			/>
		</svg>
	);
};



export default PlayButtonIcon;