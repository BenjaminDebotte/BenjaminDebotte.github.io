import Image from 'next/image'

const ThemeImage = ({ srcLight, srcDark, ...rest }) => {

  return (
    <>
      <Image {...rest} src={srcLight} className="dark:hidden object-fill" />
      <Image {...rest} src={srcDark} className="hidden dark:inline object-fill" />
    </>
  )
}

export default ThemeImage;
