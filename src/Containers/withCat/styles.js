import catFile from '../../Images/cat.jpg'

export default {
  position: 'absolute',
  backgroundImage: `url(${catFile})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 0',
  width: 100,
  height: 100,
  cursor: `url(${catFile}), auto`
}
