package models

import (
	"database/sql"
	"time"
)

// Modesl is the wrapper for database
type Models struct {
	DB DBModel
}

// NewModels returns models with db pool
func NewModels(db *sql.DB) Models {
	return Models {
		DB: DBModel{DB: db},
	}
}

// Movie is the type for movies
type Movie struct {
	ID int `json:"id"`
	Title string `json:"title"`
	Description string `json:"description"`
	Year int `json:"year"`
	ReleaseDate time.Time `json:"release_date"`
	Runtime int `json:"runtime"`
	Rating int `json:"rating"`
	MPAARating string `json:"mpaa_rating"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	MovieGenre map[int]string `json:"genres"`
	Poster string `json:"poster"`
}

// Genre is the type for genres
type Genre struct {
	ID int `json:"id"`
	GenreName string `json:"genre_name"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`

}

// MovieGenre is the type for movie genres
type MovieGenre struct {
	ID int `json:"-"`
	MovieID int `json:"-"`
	GenreID int `json:"-"`
	Genre Genre `json:"genere"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}

type User struct {
	ID int
	Email string
	Password string
}