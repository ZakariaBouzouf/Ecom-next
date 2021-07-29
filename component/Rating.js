import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@chakra-ui/react";

const Rating = ({ value, text, color }) => {
	return (
		<Box>
			<Box as='span' m='.1rem'>
				{value >= 1 ? (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				) : value >= 0.5 ? (
					<FontAwesomeIcon
						icon={faStarHalfAlt}
						// style={{color }}
					></FontAwesomeIcon>
				) : (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				)}
			</Box>
			<Box as='span'>
				{value >= 2 ? (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				) : value >= 1.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} style={{ color }}></FontAwesomeIcon>
				) : (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				)}
			</Box>
			<Box as='span'>
				{value >= 3 ? (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				) : value >= 2.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} style={{ color }}></FontAwesomeIcon>
				) : (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				)}
			</Box>
			<Box as='span'>
				{value >= 4 ? (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				) : value >= 3.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} style={{ color }}></FontAwesomeIcon>
				) : (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				)}
			</Box>
			<Box as='span'>
				{value >= 5 ? (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				) : value >= 4.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} style={{ color }}></FontAwesomeIcon>
				) : (
					<FontAwesomeIcon icon={faStar} style={{ color }}></FontAwesomeIcon>
				)}
			</Box>
			<Box as='span' ml='2'>
				{text && text}
			</Box>
		</Box>
	);
};

Rating.defaultProps = {
	color: "#f8e825",
};

Rating.PropType = {
	value: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
};

export default Rating;
