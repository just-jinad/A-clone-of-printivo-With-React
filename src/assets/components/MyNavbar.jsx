import React from 'react'

const MyNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a style={{fontSize:"13px"}} class="navbar-brand fw-bold text-secondary-emphasis" href="#">Corporate Pricing</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a style={{fontSize:"13px"}}  class="fw-bold text-dark justify-content-beween nav-link active text-secondary-emphasis" aria-current="page" href="#">Discover Stories</a>
        <a style={{fontSize:"13px"}}  class="fw-bold text-dark justify-content-beween nav-link text-secondary-emphasis" href="#">Track Orders</a>
        <a style={{fontSize:"13px", marginLeft: "190px"}}  class="fw-bold text-dark justify-content-beween  nav-link text-secondary-emphasis" href="#">Need help? Call: <a href=""className='text-decoration-none'>+2348091084333,+2348091085333</a></a>
        <img style={{width:"30px"}} src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.838 26.921l.484.285a13.272 13.272 0 006.74 1.838h.005c7.3 0 13.24-5.912 13.242-13.178a13.068 13.068 0 00-3.875-9.324 13.187 13.187 0 00-9.362-3.865c-7.305 0-13.245 5.912-13.248 13.178a13.097 13.097 0 002.024 7.013l.315.498-1.338 4.863 5.013-1.308zM0 31.996l2.26-8.216a15.769 15.769 0 01-2.126-7.926C.137 7.112 7.284 0 16.067 0a15.869 15.869 0 0111.27 4.65A15.723 15.723 0 0132 15.867c-.004 8.741-7.152 15.855-15.933 15.855h-.006c-2.667-.001-5.287-.667-7.614-1.93L0 31.996z' fill='%23fff'/%3E%3Cpath d='M.683 15.862a15.223 15.223 0 002.054 7.652L.554 31.445l8.154-2.128a15.436 15.436 0 007.35 1.863h.007c8.477 0 15.377-6.867 15.38-15.306a15.176 15.176 0 00-4.5-10.828 15.32 15.32 0 00-10.88-4.49C7.586.557.686 7.423.682 15.863zM16.064 31.18z' fill='url(%23paint0_linear)'/%3E%3Cpath d='M.134 15.858a15.77 15.77 0 002.127 7.927L0 32l8.446-2.204a15.98 15.98 0 007.614 1.93h.007c8.78 0 15.929-7.114 15.933-15.855a15.722 15.722 0 00-4.663-11.217 15.87 15.87 0 00-11.27-4.65C7.284.004.137 7.116.134 15.858zm5.03 7.512l-.316-.498a13.098 13.098 0 01-2.024-7.013C2.826 8.593 8.767 2.682 16.072 2.682a13.188 13.188 0 019.362 3.864 13.068 13.068 0 013.875 9.323c-.003 7.267-5.943 13.179-13.242 13.179h-.006a13.274 13.274 0 01-6.74-1.837l-.484-.286-5.012 1.308 1.338-4.863zm10.903 8.356z' fill='url(%23paint1_linear)'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.085 9.229c-.298-.66-.612-.673-.896-.685-.232-.01-.498-.01-.763-.01s-.697.1-1.061.497C9 9.427 7.97 10.386 7.97 12.335c0 1.95 1.427 3.834 1.626 4.099.199.264 2.754 4.393 6.8 5.982 3.363 1.32 4.047 1.057 4.777.99.73-.065 2.356-.957 2.687-1.883.332-.925.332-1.718.233-1.884-.1-.165-.365-.264-.764-.462-.398-.198-2.355-1.157-2.72-1.29-.365-.132-.63-.198-.896.2-.265.396-1.028 1.288-1.26 1.552-.232.265-.464.298-.863.1-.398-.199-1.68-.617-3.201-1.967-1.184-1.05-1.982-2.347-2.215-2.744-.232-.396-.025-.611.175-.809.179-.177.398-.462.597-.694.199-.231.265-.396.398-.66.133-.265.066-.497-.033-.695-.1-.198-.873-2.158-1.227-2.941' fill='%23fff'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='16' y1='31.442' x2='16' y2='.554' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2320B038'/%3E%3Cstop offset='1' stop-color='%2360D66A'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear' x1='16' y1='32.001' x2='16' y2='.005' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23F9F9F9'/%3E%3Cstop offset='1' stop-color='%23fff'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="" />
        <button className='btn btn-outline-secondary rounded text-secondary-emphasis'>Nigeria</button>
    
        {/* <a style={{fontSize:"13px",}}  class="fw-bold text-dark justify-content-beween  nav-link disabled">Disabled</a> */}
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default MyNavbar