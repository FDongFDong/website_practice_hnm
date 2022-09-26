import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const gotoLogin = () => {
    navigate('/login');
  };
  const navigate = useNavigate();
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];
  const search = (event) => {
    if (event.key === 'Enter') {
      //입력한 검색어를 읽어와서
      //url을 바꿔준다.
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={gotoLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>
            <button>로그인</button>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-700x394.png"
        />
      </div>
      <div className="menu-area">
        <ul className="menuList">
          {menuList.map((menu, key) => {
            return <li key={key}>{menu}</li>;
          })}
        </ul>
        <div className="search-area">
          <div className="font-area">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div>
            <input
              type="text"
              onKeyPress={(event) => search(event)}
              placeholder="제품검색"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
