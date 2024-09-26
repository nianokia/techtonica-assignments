--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Homebrew)
-- Dumped by pg_dump version 14.13 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: tpl622_2
--

CREATE TABLE public.contacts (
    contact_id integer NOT NULL,
    name character varying(70) NOT NULL,
    email character varying(320) NOT NULL,
    phone character varying(30) NOT NULL,
    notes text
);


ALTER TABLE public.contacts OWNER TO tpl622_2;

--
-- Name: contacts_contact_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_2
--

CREATE SEQUENCE public.contacts_contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_contact_id_seq OWNER TO tpl622_2;

--
-- Name: contacts_contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_2
--

ALTER SEQUENCE public.contacts_contact_id_seq OWNED BY public.contacts.contact_id;


--
-- Name: contacts contact_id; Type: DEFAULT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.contacts ALTER COLUMN contact_id SET DEFAULT nextval('public.contacts_contact_id_seq'::regclass);


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: tpl622_2
--

COPY public.contacts (contact_id, name, email, phone, notes) FROM stdin;
1	Pekoe	pekoe@nature.com	6557870998	normal cub
2	Egbert	egbert@play.org	4371014339	lazy chicken
3	Genji	genji@fitness.com	8301216881	jock rabbit
\.


--
-- Name: contacts_contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_2
--

SELECT pg_catalog.setval('public.contacts_contact_id_seq', 3, true);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (contact_id);


--
-- PostgreSQL database dump complete
--

