import React from "react";
import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

const categories = [
  {
    name: 'all',
    title: '전체보기'
  },
  {
    name: 'business',
    title: '비지니스'
  },
  {
    name: 'entertainment',
    title: '엔터테인먼트'
  },
  {
    name: 'health',
    title: '건강'
  },
  {
    name: 'science',
    title: '과학'
  },
  {
    name: 'sports',
    title: '스포츠'
  },
  {
    name: 'technology',
    title: '기술'
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  
  &:hover {
    color: #495057;
  }
  
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({onSelect, category}) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.title}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;