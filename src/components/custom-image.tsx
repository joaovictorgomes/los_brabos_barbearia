// components/CustomImage.tsx
import Image, { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'layout'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 800,  // Valor padrão para largura
  height = 600, // Valor padrão para altura
  className,
  ...props
}) => {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={width}
        height={height}
        objectFit="cover"
        className={className}
        {...props}
      />
    </div>
  );
};

export default CustomImage;
