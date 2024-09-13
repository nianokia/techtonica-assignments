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
-- Name: individuals; Type: TABLE; Schema: public; Owner: tpl622_2
--

CREATE TABLE public.individuals (
    individual_id integer NOT NULL,
    nickname character varying(255) NOT NULL,
    species character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.individuals OWNER TO tpl622_2;

--
-- Name: individuals_individual_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_2
--

CREATE SEQUENCE public.individuals_individual_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individuals_individual_id_seq OWNER TO tpl622_2;

--
-- Name: individuals_individual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_2
--

ALTER SEQUENCE public.individuals_individual_id_seq OWNED BY public.individuals.individual_id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: tpl622_2
--

CREATE TABLE public.sightings (
    sighting_id integer NOT NULL,
    individual character varying(255) NOT NULL,
    date_time timestamp without time zone NOT NULL,
    location text NOT NULL,
    health boolean NOT NULL,
    email character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.sightings OWNER TO tpl622_2;

--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_2
--

CREATE SEQUENCE public.sightings_sighting_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_sighting_id_seq OWNER TO tpl622_2;

--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_2
--

ALTER SEQUENCE public.sightings_sighting_id_seq OWNED BY public.sightings.sighting_id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: tpl622_2
--

CREATE TABLE public.species (
    species_id integer NOT NULL,
    common_name character varying(255) NOT NULL,
    scientific_name character varying(255) NOT NULL,
    wild_population integer NOT NULL,
    status_code character varying(2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.species OWNER TO tpl622_2;

--
-- Name: sightings_species_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl622_2
--

CREATE SEQUENCE public.sightings_species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_species_id_seq OWNER TO tpl622_2;

--
-- Name: sightings_species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl622_2
--

ALTER SEQUENCE public.sightings_species_id_seq OWNED BY public.species.species_id;


--
-- Name: individuals individual_id; Type: DEFAULT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.individuals ALTER COLUMN individual_id SET DEFAULT nextval('public.individuals_individual_id_seq'::regclass);


--
-- Name: sightings sighting_id; Type: DEFAULT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.sightings ALTER COLUMN sighting_id SET DEFAULT nextval('public.sightings_sighting_id_seq'::regclass);


--
-- Name: species species_id; Type: DEFAULT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.species ALTER COLUMN species_id SET DEFAULT nextval('public.sightings_species_id_seq'::regclass);


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: tpl622_2
--

COPY public.individuals (individual_id, nickname, species, created_at) FROM stdin;
1	Opal	barred owl	2024-09-11 22:55:02.965008
2	Daisy	gopher tortoise	2024-09-11 22:57:04.853523
3	Grim	barred owl	2024-09-11 22:57:04.854438
4	Flute	black bear	2024-09-11 23:00:50.951309
5	Manny	black bear	2024-09-11 23:00:50.952065
6	Selfi	gopher tortoise	2024-09-11 23:00:50.952442
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: tpl622_2
--

COPY public.sightings (sighting_id, individual, date_time, location, health, email, created_at) FROM stdin;
1	Daisy	2016-06-22 19:10:25	Charleston	t	heidi@mountain.com	2024-09-11 22:10:29.647205
2	Manny	2024-01-31 21:01:58	Aiken	t	timothyallen@wall.net	2024-09-11 22:14:07.369572
3	Selfi	2016-08-01 12:09:34	Columbia	f	saoirse28@sunset.com	2024-09-11 22:18:07.621228
4	Manny	2018-05-14 08:21:51	Saluda	t	heidi@mountain.com	2024-09-11 22:24:30.361418
5	Opal	2021-10-19 01:01:15	Oconee	f	taylorp@ranger.org	2024-09-11 22:30:21.231986
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: tpl622_2
--

COPY public.species (species_id, common_name, scientific_name, wild_population, status_code, created_at) FROM stdin;
1	black bear	Ursus americanus	900	LC	2024-09-11 22:38:23.43499
2	barred owl	Strix varia	40000	LC	2024-09-11 22:44:15.616394
3	gopher tortoise	Gopherus polyphemus	220	VU	2024-09-11 22:52:01.89299
\.


--
-- Name: individuals_individual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_2
--

SELECT pg_catalog.setval('public.individuals_individual_id_seq', 6, true);


--
-- Name: sightings_sighting_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_2
--

SELECT pg_catalog.setval('public.sightings_sighting_id_seq', 5, true);


--
-- Name: sightings_species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl622_2
--

SELECT pg_catalog.setval('public.sightings_species_id_seq', 3, true);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (individual_id);


--
-- Name: species sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (species_id);


--
-- Name: sightings sightings_pkey1; Type: CONSTRAINT; Schema: public; Owner: tpl622_2
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey1 PRIMARY KEY (sighting_id);


--
-- PostgreSQL database dump complete
--

