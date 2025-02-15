import { BiEdit } from "react-icons/bi"
import { BsFileEarmarkImageFill } from "react-icons/bs"
import { FaFilePdf, FaTrash } from "react-icons/fa"

export const ImageIcon = () => 
    <BsFileEarmarkImageFill className="text-blue-600" />

export const PdfIcon = () =>
    <FaFilePdf className="text-[rgba(244,15,2)]" />

export const EditIcon = () =>
    <BiEdit className="text-green-600" />

export const DeleteIcon = () =>
    <FaTrash  className="text-red-600" />
