import { Alert, IconButton, LinearProgress, Menu, MenuItem, Snackbar } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { makeStyles } from '@mui/styles'
import { AccountCircle, Close } from '@mui/icons-material'
import StoreIcon from '@mui/icons-material/Store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// import './style.scss'
// import { cartItemsCountSelector } from 'pages/CartPage/selector'
import Login from '../../pages/Auths/Login'
import Register from '../../pages/Auths/Register'
import { spacing } from '@mui/system'

export default function Header() {
  const isLoggedIn = true
  function handleClick() {
    console.log(1)
  }
  const checkuser = {}
  const categorytitle = 'fsaf'
  const cartItemsCount = 4
  return (
    <header className="header">
      <Snackbar
        // open={miniCartSelector}
        autoHideDuration={8000}
        // onClose={SnackBar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          // onClose={SnackBar}
          severity="success"
        >
          Thêm vào giỏ hàng thành công
        </Alert>
      </Snackbar>
      <div className="container">
        <div className="row">
          <div className="header__top ">
            <div className="header__top--left ">
              <span>Liên lạc </span>
              <span>0969045051</span>
              <span>taiht221@gmail.com</span>
            </div>
            <div className="header__top--right">
              {!isLoggedIn ? (
                <>
                  <Button
                    color="inherit"
                    onClick={() => {
                      setForm('login')
                      handleClickOpen()
                    }}
                  >
                    Đăng nhập
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => {
                      setForm('register')
                      handleClickOpen()
                    }}
                  >
                    Đăng ký
                  </Button>
                </>
              ) : (
                <div onClick={handleClick}>
                  <Button color="inherit">{checkuser.name}</Button>
                  <IconButton

                  // onClick={
                  //   // localStorage.clear();
                  //   // setisLoggedIn(false);
                  //   handleClick;
                  // }
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row header__mid">
          <div className="logo ">
            <Link to="/">
              <StoreIcon />
            </Link>
          </div>
          <div className="search ">
            <div className="search-container">
              <form>
                <input type="text" placeholder="Tìm kiếm sản phẩm" name="search" />
              </form>
            </div>
            {categorytitle.loading ? <LinearProgress color="secondary" /> : null}

            <nav className="nav">
              <ul className="cate-top">
                {/* {categorytitle.categoryData
                  .map((e, i) => (
                    <li key={i}>
                      <Link to={`/search/${e.slug}`}>{e.title}</Link>
                    </li>
                  ))
                  .slice(0, 3)} */}
              </ul>
            </nav>
          </div>
          <div className="icons ">
            <button onClick={() => history.push('/cart')}>
              <ShoppingCartIcon />
              {cartItemsCount > 0 && <span className="number-basket">{cartItemsCount}</span>}
            </button>
          </div>
        </div>
        <div className="row"></div>
      </div>
      <Menu keepMounted open={Boolean(true)}>
        <MenuItem>
          <Link to="/thong-tin">Thông tin người dùng</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear()
            setisLoggedIn(false)
          }}
        >
          Đăng xuất
        </MenuItem>
      </Menu>
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <IconButton onClick={}>
          <Close />
        </IconButton>
        <DialogContent>
        </DialogContent>
      </Dialog>
    </header>
  )
}
