import LocalezedLink from "../Globals/LocalezedLink"

const Logo = ({ className }) => {
    return (
        <LocalezedLink href={'/'}
            className={` px-3 ${className}  text-xl !font-bold tracking-tighter`}
            style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
            Motarge.ma
        </LocalezedLink>
    )
}

export default Logo
