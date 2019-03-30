const lightGreen = '#9eebcf'

export const profilePage = {
  maxWidth: '800px',
  margin: '0px auto',
  textAlign: 'left',
}

export const profile = {
  justifyContent: 'left',
  height: '100%',
  flexDirection: 'row',
  display: 'flex',
}

export const column = {
  border: 'solid white 2px',
  height: '100px',
}

export const headshot = {
  textAlign: 'center',
  background: lightGreen,
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  width: '30vw',
  height: '30vw',
}

export const headshotH2 = {
  margin: 0,
  fontFamily: 'arial',
  fontSize: '2vw',
  flexShrink: 1,
}

export const headshotImg = {
  display: 'block',
  margin: '8% auto',
  background: 'white',
  borderRadius: '100%',
  flexGrow: 1,
  height: '20vw',
}

export const address = {
  height: '30vw',
  textAlign: 'left',
  paddingLeft: '30px',
  width: 'calc(80% - 25vw)',
}

export const addressP = {
  margin: 0,
}

export const back = {
  display: 'inline-block',
  textDecoration: 'none',
  color: lightGreen,
  fontWeight: 700,
  marginBottom: '12px',
}

export const button = {
  display: 'inline-block',
  padding: '8px 16px',
  borderRadius: '6px',
  fontWeight: 700,
  color: '#ffffff',
  backgroundColor: '#131313',
  textDecoration: 'none',
  margin: '20px 0px',
  transition: 'all .2s ease-out',
  ':hover': {
    backgroundColor: lightGreen,
  },
}
