import React, { useEffect, useState } from "react";
import DashboardTemplate from "../template/Dashboard";
import styled from "styled-components";
import { motion } from "framer-motion";
import ArrowUp from "../assets/arrow-up.svg";
import axiosIntance from "../services/axios";
import { textItemVariants } from "../utils/variants";

export default function PostsComponent() {
  const [products, setProducts] = useState<Record<string, any>[]>([]);
  const user = JSON.parse(localStorage.getItem('RodufyUser') as string)
  const [paginatedProducts, setPaginatedProducts] = useState<
    Record<string, any>[]
  >([]);
  const [topSix, setTopSix] = useState<Record<string, any>[]>([]);
  const [next, setNext] = useState(0);
  const [isMorePages, setIsMorePages] = useState(true);
  const pageCount = 10;

  const handleMore = () => {
    if (next >= products.length) {
      setNext(0);
      setIsMorePages(false);
      return;
    }

    const moreData = products.slice(next, pageCount + next + 1);
    setPaginatedProducts((prev) => [...prev, ...moreData]);
    setNext(next + pageCount + 1);
  };

  const validateDescription = (des: string) => {
    return des.length > 70 ? des.substring(0, 70) + "..." : des;
  };

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("RodufyUserToken");
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axiosIntance.get("/products", config);
        const topSixProducts = res.data.data.slice(0, 6);
        const firstPage = res.data.data.slice(next, pageCount);
        setPaginatedProducts(firstPage);
        setTopSix(topSixProducts);
        setProducts(res.data.data);
        setNext(pageCount + 1);
      } catch (error) {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardTemplate email={user?.user?.email}>
      <ContentWrapper>
        <div className="heading-wrapper">
          <div className="heading">
            <img src={ArrowUp} alt="arrow up" />
            <h3>Top Posts</h3>
          </div>
          <div className="top-posts-wrapper">
            {topSix.length > 0 &&
              topSix.map((prod) => (
                <motion.div
                  variants={textItemVariants}
                  initial="closed"
                  animate="open"
                  className="img--wrapper"
                  key={prod!.id}
                >
                  <img src={prod.metaImageUrl} alt="product" />
                  <div className="post">
                    {validateDescription(prod.description)}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
        <div className="content--side">
          <div className="heading">
            <img src={ArrowUp} alt="arrow up" />
            <h3>Trending</h3>
          </div>
          <div className="content--wrapper">
            {products.length > 0 &&
              paginatedProducts.map((prod) => (
                <motion.div
                  variants={textItemVariants}
                  initial="closed"
                  animate="open"
                  className="img--wrapper"
                  key={prod.id}
                >
                  <img src={prod.metaImageUrl} alt="product" />
                  <div className="post">
                    {validateDescription(prod.description)}
                  </div>
                </motion.div>
              ))}
          </div>
          {products.length > 0 && isMorePages && (
            <button onClick={handleMore}>Load More</button>
          )}
        </div>
      </ContentWrapper>
    </DashboardTemplate>
  );
}

const ContentWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 50px;
  box-sizing: border-box;
  padding: 20px;

  .heading-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* border: 1px solid green; */
    & .heading {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 30px;

      & img {
        width: 24px;
        height: 24px;
      }
    }

    & .top-posts-wrapper {
      display: flex;
      gap: 50px;
      width: 100%;
      overflow-x: scroll;

      & .img--wrapper {
        position: relative;
        width: 350px;
        height: 250px;
        cursor: pointer;

        & img {
          width: 350px;
          height: 250px;
          border-radius: 10px;
        }

        &:hover:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          transition: background 0.3s linear;
          border-radius: 10px;
        }

        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.4);
          transition: background 0.3s linear;
          border-radius: 10px;
        }

        & .post {
          position: absolute;
          left: 50%;
          bottom: 15px;
          transform: translateX(-50%);
          background-color: rgba(255, 255, 255, 0.5);
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          border-radius: 10px;
          box-sizing: border-box;
          padding: 5px;
          width: 90%;
          height: 100px;
          overflow-y: hidden;
        }
      }
    }
  }

  .content--side {
    & .heading {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 40px;

      & img {
        width: 24px;
        height: 24px;
      }
    }

    & button {
      width: 350px;
      height: 70px;
      background: var(--button);
      border-radius: 5px;
      display: grid;
      place-items: center;
      outline: none;
      border: none;
      cursor: pointer;
      color: #ffffff;
      font-size: 20px;
      margin: 0 auto;
      display: block;
      margin-top: 30px;
    }

    & button:disabled {
      cursor: not-allowed;
      background-color: var(--secondary);
      color: rgba(0, 0, 0, 0.5);
    }

    & .content--wrapper {
      width: 100%;
      display: grid;
      /* grid-template-columns: repeat(auto-fill, 350px);
      row-gap: 20px;
      column-gap: 100px; */
      /* place-content: center; */
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      height: auto;
      gap: 20px;
      margin-top: 10px;
      & .img--wrapper {
        position: relative;
        width: 350px;
        height: 250px;
        cursor: pointer;

        &:hover:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          transition: background 0.3s linear;
          border-radius: 10px;
        }

        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.4);
          transition: background 0.3s linear;
          border-radius: 10px;
        }

        & .post {
          position: absolute;
          left: 50%;
          bottom: 15px;
          transform: translateX(-50%);
          background-color: rgba(255, 255, 255, 0.5);
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          border-radius: 10px;
          box-sizing: border-box;
          padding: 5px;
          width: 90%;
          height: 100px;
          overflow-y: hidden;
        }
        & img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    & .content--side {
      .content--wrapper {
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .content--side {
      & button {
        width: 150px;
      }
    }
  }
`;
