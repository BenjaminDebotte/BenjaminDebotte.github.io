import Image from 'next/image'

const ThemeImage = ({ srcLight, srcDark, ...rest }) => {

  return (
    <>
      <Image {...rest} src={srcLight} className="dark:hidden" />
      <Image {...rest} src={srcDark} className="hidden dark:inline" />
    </>
  )
}

export default ThemeImage;
