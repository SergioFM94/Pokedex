import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);
  const navigate = useNavigate();

  const onSearchInputChange = e => {
    const value = e.target.value;
    onInputChange(e);
    if (value && value.trim() !== '') { 
      navigate('/search', {
        state: value,
      });
    }
  };

  return (
    <>
      <header className='container'>
        <Link to='/' className='logo'>
          <img src='https://camo.githubusercontent.com/418d92ecbe7cd1805153001a34147ab7c965103432ff4a68eaa2fc5d4e6c1b42/68747470733a2f2f696b2e696d6167656b69742e696f2f6877796b73766a3469762f706f6b656465785f4e5f576757724a4b30732e706e67'/>
        </Link>

        <form>
          <div className='form-group'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='icon-search'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
            <input
              type='search'
              name='valueSearch'
              id=''
              value={valueSearch}
              onChange={onSearchInputChange}
              placeholder='Pokemon'
              className='input-search'
            />
          </div>
        </form>
      </header>

      <Outlet />
    </>
  );
};
