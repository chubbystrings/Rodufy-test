import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthTemplate from "../template/Auth";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await login(email, password);

      if (error) {
        setLoading(false);
      } else {
        navigate("/posts", { replace: true });
      }
    } catch (error) {
      setLoading(false);
    }
  };


  return (
    <AuthTemplate>
      <LoginWrapper>
        <div className="card-wrapper">
          <div className="card">
            <h3>Login</h3>
            <div className="form--wrapper">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={loading}>Login</button>
              </form>
            </div>
            <div className="links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </div>
          </div>
        </div>
      </LoginWrapper>
    </AuthTemplate>
  );
}

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  place-items: center;

  .card-wrapper {
    & .card {
      width: 400px;
      background: #ffffff;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 40px 10px;
      height: 450px;
      box-sizing: border-box;
      position: relative;

      .links {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        & a {
            color: var(--button);
        }
      }

      & h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 61px;
      }

      & .form--wrapper {
        padding: 5px 20px;
        box-sizing: border-box;
        width: 100%;
        & form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;

          & input {
            padding: 20px;
            background: var(--secondary);
            border: none;
            outline: none;
            width: 100%;
            box-sizing: border-box;
            height: 70px;
            background: #f4f4f4;
            border-radius: 10px;
            font-size: 20px;
          }

          & button {
            width: 100%;
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
          }

          & button:disabled {
            cursor: not-allowed;
            background-color: var(--secondary);
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }

      @media screen and (max-width: 450px) {
        width: calc(100% - 20px);
        margin: 0 auto;
      }
    }
  }
`;
