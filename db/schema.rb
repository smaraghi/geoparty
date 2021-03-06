# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_15_134226) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.text "description"
    t.string "url"
    t.string "image"
    t.string "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "likes"
    t.integer "dislikes"
  end

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.string "profile"
    t.string "location"
    t.string "continent"
    t.string "area"
    t.integer "area_rank"
    t.string "comparison"
    t.string "border_countries"
    t.string "climate"
    t.string "terrain"
    t.string "lowest_point"
    t.string "highest_point"
    t.string "natural_resources"
    t.string "population"
    t.integer "population_rank"
    t.string "nationality"
    t.string "languages"
    t.string "religions"
    t.string "major_cities"
    t.string "capital"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.text "bio"
    t.string "avatar"
    t.integer "total_questions", default: 0
    t.integer "correct_answers", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
