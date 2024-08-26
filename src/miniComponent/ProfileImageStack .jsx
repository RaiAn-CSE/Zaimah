import PropTypes from 'prop-types';

const ProfileImageStack = ({ images }) => {
    return (
        <div className="relative col-span-5 basis-[40%]">
            {images.map((imgSrc, index) => (
                <img
                    key={index}
                    className="h-10 w-10 rounded-full absolute top-0 border"
                    src={imgSrc}
                    alt={`Profile ${index + 1}`}
                    style={{ left: `${index * 25}px` }}
                />
            ))}
        </div>
    );
};

ProfileImageStack.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // Corrected prop type
};

export default ProfileImageStack;
