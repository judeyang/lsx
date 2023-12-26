import Link from 'next/link'

/**
 * 首页导航大按钮组件
 * @param {*} props
 * @returns
 */
const NavButtonGroup = (props) => {
  const { categoryOptions } = props
  if (!categoryOptions || categoryOptions.length === 0) {
    return <></>
  }

  return (
    <nav id='home-nav-button' className={'w-full z-10 md:h-72 md:mt-6 xl:mt-32 px-5 py-2 mt-8 flex flex-wrap md:max-w-6xl space-y-2 md:space-y-0 md:flex justify-center max-h-80 overflow-auto'}>
      {categoryOptions?.map(category => {
        return (
          <Link
            key={`${category.name}`}
            title={`${category.name}`}
           return (
  <nav id='home-nav-button' className={'w-full z-10 md:h-72 md:mt-6 xl:mt-32 px-5 py-2 mt-8 flex flex-wrap md:max-w-6xl space-y-2 md:space-y-0 md:flex justify-center max-h-80 overflow-auto'}>
    {categoryOptions?.map(category => {
      // 检查是否为『关于我们』，如果是，修改链接地址为"/article/aboutus"，否则使用默认地址
      const href = category.name === '关于我们' ? '/article/aboutus' : `/category/${category.name}`;

      return (
        <Link
          key={`${category.name}`}
          title={`${category.name}`}
          href={href} // 使用确定的链接地址
          passHref
          className='text-center shadow-text w-full sm:w-4/5 md:mx-6 md:w-40 md:h-14 lg:h-20 h-14 justify-center items-center flex border-2 cursor-pointer rounded-lg glassmorphism hover:bg-white hover:text-black duration-200 hover:scale-105 transform'>
             {category.name}
        </Link>
      )
    })}
  </nav>
)
            passHref
            className='text-center shadow-text w-full sm:w-4/5 md:mx-6 md:w-40 md:h-14 lg:h-20 h-14 justify-center items-center flex border-2 cursor-pointer rounded-lg glassmorphism hover:bg-white hover:text-black duration-200 hover:scale-105 transform'>
               {category.name}
            </Link>
        )
      })}
    </nav>
  )
}
export default NavButtonGroup
