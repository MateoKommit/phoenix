defmodule HelloWeb.Plugs.OurAuth do
  import Plug.Conn

  def init(default), do: default

  def call(conn, _default) do
    conn
  end
end
