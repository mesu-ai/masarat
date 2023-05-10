import ArrowDown from "@/assets/svgs/ArrowDown";
import ArrowUp from "@/assets/svgs/ArrowUp";
import { useState } from "react";
import ParagraphText from "../atoms/ParagraphText";
import { useTranslation } from "react-i18next";

const Accrodion = ({
	className = '',
	title = 'Accrodion Title',
	titleStyle = 'text-blackPearl',
	isOpen = false,
	children,
}) => {
	const [open, setOpen] = useState(isOpen);
  const {t}=useTranslation();
	return (
		<div className={` ${className}`}>
			<button
				type="button"
				onClick={() => setOpen((prevState) => !prevState)}
				className='w-full  py-4 flex justify-between'
			>
				<p className={`text-start text-lg font-bold  ${titleStyle}`}>{t(`${title}`)}</p>
				{open ? <ArrowUp /> : <ArrowDown />}
        
			</button>
			{open  && <div><ParagraphText>{children}</ParagraphText></div>}
		</div>
	);
};

export default Accrodion;