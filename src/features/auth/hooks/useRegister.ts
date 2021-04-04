import { api } from "./../../../lib/api";
import { RegisterData } from "./../types";
import { useState } from "react";
import { useHistory } from "react-router";

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const history = useHistory();
  const register = async (resgisterData: RegisterData) => {
    try {
      setLoading(true);
      await api.post("auth/register", resgisterData);
      alert("회원가입 완료");
      history.push("/login");
    } catch (e) {
      setError(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    error,
    loading,
  };
}
