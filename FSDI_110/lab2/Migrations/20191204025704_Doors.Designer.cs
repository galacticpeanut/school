﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using lab2.Models;

namespace lab2.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20191204025704_Doors")]
    partial class Doors
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0");

            modelBuilder.Entity("lab2.Models.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Cyls")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("DailyPrice")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Doors")
                        .HasColumnType("TEXT");

                    b.Property<string>("HP")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("TEXT");

                    b.Property<string>("Make")
                        .HasColumnType("TEXT");

                    b.Property<string>("Mileage")
                        .HasColumnType("TEXT");

                    b.Property<string>("Model")
                        .HasColumnType("TEXT");

                    b.Property<string>("PassengerCapacity")
                        .HasColumnType("TEXT");

                    b.Property<string>("Stock")
                        .HasColumnType("TEXT");

                    b.Property<int>("Year")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Cars");
                });
#pragma warning restore 612, 618
        }
    }
}
