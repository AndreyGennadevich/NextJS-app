import React, {useState} from "react";
import {Button, Htag, Input, P, Rating, Tag, Textarea} from "../components";
import { withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../intefaces/menu.interface";
import {API} from "../helpers/api";

function Home({menu}: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
        <Htag tag="h1">Текст</Htag>
        <Button appearance="primary" arrow="right">Кнопка</Button>
        <Button appearance="ghost" arrow="down">Кнопка</Button>
        <P size='l'>Big</P>
        <P size='m'>Medium</P>
        <P size='s'>Small</P>
        <Tag size='m' color='red'>Мал</Tag>
        <Tag size='s' color='green'>Мал</Tag>
        <Rating rating={rating} isEditable setRating={setRating}/>
        <ul>
            {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
        </ul>
        <Input placeholder={'text'}/>
        <Textarea/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find,{
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}